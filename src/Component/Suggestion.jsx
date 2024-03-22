import React from 'react'

const Suggestion = ({handleSuggestedClick}) => {
  return (
    <>
      <div className="suggested">
                    <span>Suggested</span>
                    <ul className='items'>
                        <li onClick={() => handleSuggestedClick("Cars")}>Cars</li>
                        <li onClick={() => handleSuggestedClick("Illustrations")}>Illustrations</li>
                        <li onClick={() => handleSuggestedClick("Computer")}>Computer</li>
                        <li onClick={() => handleSuggestedClick("Electronics")}>Electronics</li>
                        <li onClick={() => handleSuggestedClick("Plants")}>Plants</li>
                        <li onClick={() => handleSuggestedClick("Buildings")}>Buildings</li>
                    </ul>
                </div>
    </>
  )
}

export default Suggestion
