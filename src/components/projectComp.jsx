import React, { Component , useEffect,useState} from "react";
function projectComp() {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error("Error caught by error boundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div>Something went wrong.</div>;
      }

      return this.props.children;
    }
  }


// api call

const[data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/sujanthapa01');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const json = await response.json();
    setData(json);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
fetchData();



return (
  <div>
    <ErrorBoundary>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <a
          href=""
          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
        >
          <div className="flex flex-col h-full">
            <div className="grow">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                  <img
                    alt="Radish"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                    srcSet="https://images.unsplash.com/photo-1716319487101-108ceed67fcb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-lg font-aspekta font-[650] mb-1">{data.login}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum laboriosam itaque corporis atque, fugiat beatae
              deleniti quibusdam perferendis, dolorem porro voluptas quidem
              saepe distinctio dolore sequi ab nesciunt repudiandae? Impedit.
            </p>
          </div>
          <div className="text-sky-500 flex justify-end">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
            >
              <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
            </svg>
          </div>
        {/* </a>
        <a */}
          href=""
          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
        >
          <div className="flex flex-col h-full">
            <div className="grow">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                  <img
                    alt="Radish"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                    
                    srcSet={data.avatar_url}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-lg font-aspekta font-[650] mb-1">Project</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum laboriosam itaque corporis atque, fugiat beatae
              deleniti quibusdam perferendis, dolorem porro voluptas quidem
              saepe distinctio dolore sequi ab nesciunt repudiandae? Impedit.
            </p>
          </div>
          <div className="text-sky-500 flex justify-end">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
            >
              <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
            </svg>
          </div>
        </a>
      </div>
    </ErrorBoundary>
  </div>
);
}


export default projectComp
