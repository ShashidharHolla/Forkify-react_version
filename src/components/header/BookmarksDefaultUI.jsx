import icons from "../../assets/icons.svg";

export default function BookmarksDefaultUI() {
  return (
    <div className="message">
      <div>
        <svg>
          <use href={`${icons}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
    </div>
  );
}
