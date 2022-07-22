import React from 'react'
import './styles.scss'

function index({ defaultText, onEditorChange }) {
  return (
    <textarea id="editor" onChange={(e) => onEditorChange(e.target.value)}>
        {defaultText}
    </textarea>
  )
}

export default index