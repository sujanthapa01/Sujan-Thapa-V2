import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColorForUser } from '../features/color/colorSlice';

const textColors = [
  { textColor: "text-yellow-400", bgColor: "bg-yellow-300" },
  { textColor: "text-blue-400", bgColor: "bg-blue-300" },
  { textColor: "text-green-400", bgColor: "bg-green-300" }
];

function TextColorPicker({ userId }) { // Pass the user ID as a prop
  const dispatch = useDispatch();
  const userColors = useSelector((state) => state.color.userColors);
  const colorIndex = userColors[userId] || 0; // Default to the first color if not set
  const [localColorIndex, setLocalColorIndex] = useState(colorIndex);
  const colors = textColors[localColorIndex] || { textColor: "text-blue-400", bgColor: "bg-blue-300" };

  const handleSaveColorChanges = () => {
    dispatch(setColorForUser({ userId, colorIndex: localColorIndex }));
  };

  return (
    <div>
      <div className="rotate-[1deg] mt-6">
        <div className="overflow-hidden text-bold w-full h-auto rounded-md border-[1px] border-gray-300 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
          <div className="p-6 h-full text-center">
            <div>
              <div className="flex flex-col gap-4">
                <span className="text-xl text-slate-400 dark:text-slate-500">
                  Choose Text Color
                </span>
                <div>
                  <h3 className={`inline-flex text-2xl font-bold relative duration-200 cursor-pointer before:absolute before:inset-0 before:${colors.bgColor} before:opacity-30 before:-z-10 hover:before:-rotate-0 before:-rotate-3 before:translate-y-1/4 before:h-6 ${colors.textColor}`}>
                    Sujan Thapa
                  </h3>
                </div>
                <div className="mt-4">
                  {textColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setLocalColorIndex(index)}
                      className={`px-4 py-2 m-1 ${color.bgColor} rounded`}
                    >
                      {color.bgColor.replace('bg-', '').replace('-300', '')}
                    </button>
                  ))}
                </div>
                <button onClick={handleSaveColorChanges} className="pl-4 pr-4 pt-2 pb-2 bg-blue-300 rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextColorPicker;
