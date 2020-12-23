import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../utils/use-auth"

export default function PrivateRoute({ children, ...rest }) {

    let auth = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}
