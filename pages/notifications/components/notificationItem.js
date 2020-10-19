import format from "date-fns/format";

export default function NotificationItem(props) {
  const { notification = {} } = props;

  return (
    <div className="row row-height-supportsection">
      <div className="col-lg-10 col-md-10 col-sm-9 col-12 align-self-center">
        <div className="notificaion-board">
          <div className="userPicSection">
            <img src="/imgs/profile-pic.png" alt="user picture" />
          </div>
          <div className="msg-contentsection">
            <div className="date-section">
              <h6>
                {format(
                  notification.timestamp
                    ? new Date(notification.timestamp)
                    : new Date(),
                  "MMMM d h:mm a"
                )}
              </h6>
              <p>{notification.message}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-2 col-md-2 col-sm-3 col-12 align-self-center"
        onClick={() => props.selectNotification(notification.id)}
      >
        <div className="seemore-section">
          <h6>
            See More{" "}
            <img src="/imgs/svgs/rightarrow-icon.svg" alt="Rightarrow Icon " />{" "}
          </h6>
        </div>
      </div>
    </div>
  );
}
