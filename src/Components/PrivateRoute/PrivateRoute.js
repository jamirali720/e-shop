import React, { useContext } from 'react';
import {Route, useNavigate} from 'react-router-dom'; 
import {productContext} from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [carryProduct, setCarryProduct] = useContext(productContext);
    const Navigation = useNavigate();
    

    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigation
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;