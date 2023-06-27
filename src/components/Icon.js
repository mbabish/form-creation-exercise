function Icon({ iconName }) {
  return (
    <img src={"./assets/img/" + iconName + ".png"} className="icon" alt={{iconName} + "icon"}/>
  );
}

export default Icon;
