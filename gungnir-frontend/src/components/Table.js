import React, { useState, useEffect }  from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {FindAll} from "../utils/CRUDHandler"

export default function Table() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    (async () => {
      const posts = await FindAll();
      setPosts(posts);
    })();

    
    return () => {
      // this now gets called when the component unmounts
    };
  }, [])


  return (
    <div>
      {
        posts.length > 0? (
          <MDBTable striped>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope='col'>userId</th>
                <th scope='col'>id</th>
                <th scope='col'>title</th>
                <th scope='col'>body</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {posts.map(post => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        )
        : 
        (<div>Loading...</div>)
      }
      
    </div>
    
  );
}