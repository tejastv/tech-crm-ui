import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MainLayout from "../../layout/MainLayout";

// type RequireAuthProps = {
//   allowedRoles: string[]; // Replace 'string[]' with the actual type of allowed roles
// };

const RequireAuth: React.FC = () => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //   if (
  //     !auth.roles?.some((role) => allowedRoles?.includes(role))
  //   ) {
  //     // Redirect to the unauthorized page if the user doesn't have the required role
  //     navigate("/unauthorized", { state: { from: location }, replace: true });
  //     return null;
  //   }

  // Render the nested routes if the user is authenticated and has the required role
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default RequireAuth;
