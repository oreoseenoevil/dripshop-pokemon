const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
    </div>
  )
}

export default Loading

