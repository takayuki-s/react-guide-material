const Example = () => {
  const dynamicImport = async () => {
      const module = await import("./add")
      console.log(module)
  }
  dynamicImport()
};

export default Example;
