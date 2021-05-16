import React, { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";
import "react-notifications/lib/notifications.css";
import OnlineStatusMock from "./OnlineStatusMock";
import "./App.css";

const QUICK_TIMEOUT = 500;
const App = () => {
  const [isOnline, setOnline] = useState(false);
  console.log("non lodashed", isOnline);
  debounce(() => {
    console.log("lodashed", isOnline);
  }, QUICK_TIMEOUT);
  useEffect(() => {
    NotificationManager.info(isOnline ? "Online" : "Offline");
  }, [isOnline]);
  return (
    <>
      <OnlineStatusMock onIsOnlineChange={(isOnline) => setOnline(isOnline)} />
      <div className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
        <NotificationContainer />
      </div>
    </>
  );
};

export default App;
