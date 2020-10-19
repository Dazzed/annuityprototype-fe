import format from "date-fns/format";

export default function NotificationItem(props) {
  const { notification = {} } = props;

  return (
    <div className="row row-height-supportsection">
      <div className="col-lg-2 col-md-2 col-sm-2 col-12 align-self-center">
        <div className="userPicSection">
          <img src="/imgs/profile-pic.png" alt="user picture" />
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-7 col-12 align-self-center">
        <div className="date-section">
          <h6>
            {format(
              notification.timestamp
                ? new Date(notification.timestamp)
                : new Date(),
              "MMMM d h:mm a"
            )}
          </h6>
        </div>
        <div className="msg-contentsection">
          <p>{notification.message}</p>
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
