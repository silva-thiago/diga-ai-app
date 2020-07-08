const Form = ({ children }) => {
  return (
    <React.Fragment>
      <div className={'flex justify-center rounded-lg'}>
        <form className={'w-full max-w-lg bg-white shadow-lg rounded-lg p-6'}>
          {children}
        </form>
      </div>
    </React.Fragment>
  )
}

export default Form
