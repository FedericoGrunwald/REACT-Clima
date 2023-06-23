export default function Loading() {
    return (
        <div className="w-72 h-96 flex items-center justify-center bg-lime-100 rounded-5">
        <div className="w-50 h-50 box-border p-10 bg-gradient-to-br from-purple-900 via-blue-500 to-cyan-400 flex items-center 
                        justify-center rounded-full animate-spin">
          <div className="bg-lime-100 w-20 h-20 box-border rounded-full"></div>
        </div>
      </div>
    );
  }