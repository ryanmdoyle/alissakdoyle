/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import * as layoutStyles from "./layout.module.css"
 
 const Layout = ({ children }) => {

   return (
     <div className={layoutStyles.innerWrapperStyles}>
     <nav className={layoutStyles.navStyles}>
naaaaavvvvvvv
     </nav>
       <div className={layoutStyles.contentStyles}>
         <content>
           {children}
         </content>
       </div>
     </div>
   )
 }
 
 export default Layout
 