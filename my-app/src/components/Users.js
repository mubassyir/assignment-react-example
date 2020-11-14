import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


export const Users = ({users,searchUser,onChangeForm}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <div className="container row">
                <div className="col-md">
                    <h2>Users</h2>
                </div>
                <div classname="col-md">
                    <Form inline >
                        <FormControl type="text" placeholder="Search" onChange={(e) => onChangeForm(e)} className=" mr-sm-2" name="search" />
                        <Button onClick= {(e) => searchUser()}>Search</Button>
                    </Form>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}

