const Card = ({ children }) => {
  return (
    <React.Fragment>
      <div className={'flex justify-center'}>
        <div className={'w-full max-w-lg bg-white shadow-lg rounded-lg p-6'}>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card
