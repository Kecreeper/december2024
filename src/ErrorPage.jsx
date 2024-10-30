import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <div className="h-screen grid place-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kamala_Harris_2024_presidential_campaign_logo.svg/512px-Kamala_Harris_2024_presidential_campaign_logo.svg.png"/>
        </div>
    </>
  );
}

export default ErrorPage