import icons from "../../assets/icons.svg";

// eslint-disable-next-line react/prop-types
export default function UserRecipeIcon({ userClass }) {
  return (
    <div className={userClass}>
      <svg>
        <use href={`${icons}#icon-user`}></use>
      </svg>
    </div>
  );
}
