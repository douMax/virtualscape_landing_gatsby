import React from "react"
import Button from "../components/Button"

const projects = ["apple", "second title", "thrir dsdfs"]

export default function Home() {
  return (
    <div>
      {projects.map((blog, index) => (
        <p key={index}>
          {blog} - <Button text="View" />
        </p>
      ))}
    </div>
  )
}
