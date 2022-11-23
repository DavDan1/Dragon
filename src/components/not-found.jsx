import React from "react";
import Layout from "./shared/layout";

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }
  return (
    <Layout>
      <p style={style}> Unfortunately page can't be found!</p>
    </Layout>
  )
}

export default NotFound;