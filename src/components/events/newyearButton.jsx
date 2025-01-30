export const NewYearButton = ({ 
    style, 
    children 
  }) => (
    <div 
      className={`${style} bg-gradient-to-r from-violet-700 to-pink-800/50 px-3 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 max-w-[11.3rem] inline-flex items-center space-x-1 overflow-hidden cursor-pointer`}
    >
      {children}
    </div>
  );