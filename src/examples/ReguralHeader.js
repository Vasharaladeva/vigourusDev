import React from 'react'
import {StaticQuery,graphql} from 'gatsby'
const getSiteData = graphql`
query SecondQuery  {
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
`

const ReguralHeader = () => {
    return (
        <StaticQuery 
        query={getSiteData} 
        render={data => {
            console.log(data)
            return <h1>hello people</h1>
        } }
        />
    )
}
export default ReguralHeader