import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topLeft">
          <span className="logo">H&H Admin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fdac109-1.fna.fbcdn.net/v/t39.30808-6/270811452_1581497445523803_8125831556954792482_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=e3f864&_nc_eui2=AeHUg61Odx9bU3L4MYcs5fYkIFiXVqOSaR4gWJdWo5JpHhpyT0f_8VmmSldl4PnOPlujNeGvcuYhm6qs8UlTR7-J&_nc_ohc=x2MsMMMHQkQAX-bosbW&_nc_ht=scontent.fdac109-1.fna&oh=00_AT-iEWnuA1NXdP1WI5NGAo4t1bbulU_8N7SEJCxPh6rWtA&oe=6284F8F1"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
