import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getSiteData = (graphql`
query FirstQuery  {
   site{
     siteMetadata{
       title
       description
       author
       data{
         name
         age
       }
     }
   }
 }
`)

export default function Header() {
     const {
         site: {siteMetadata},
        } = useStaticQuery(getSiteData)
     
    return (
        <div>
            <h1>title:{siteMetadata.title}</h1>
             <h1>autor:{siteMetadata.author}</h1>
        </div>
    )
}
