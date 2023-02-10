import React, { useContext } from "react";
import { UserContext } from "../../context/user-context";
import Layout from "../shared/layout";


const MyPages = () => {
  const { user } = useContext(UserContext);
  console.log('user', user.displayName)
  const name= user.displayName

  return (
    <Layout>
      <div>
        <h1>My Pages</h1>
        <h1>{name}</h1>
      </div>
    </Layout>


  )
}

export default MyPages;