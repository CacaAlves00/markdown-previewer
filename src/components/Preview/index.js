import React from 'react'
import ReactMarkdown from 'react-markdown'
import './styles.scss'

function index({ content }) {
  return (
    <div id="preview">
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default index