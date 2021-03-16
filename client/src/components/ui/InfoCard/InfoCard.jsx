import clsx from "clsx";
import styles from "./Info.module.css";
import Icon from "../../core/Icon";
import Type from "../../core/Type";
//TODO: Add the following props to the InfoCard params: title, icon, label, note,
const InfoCard = ({ type, idx }) => {
  console.log(type);
  switch (type) {
    case "main-king":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                {/* <Icon variant="bed-sm" /> */}
                <img className={styles.icon} src="/media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">1 king sized bed</Type>
              </div>
            </section>
            <section>
              {/* <div className={styles.item_wrap}>
                <Type type="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div> */}
            </section>
          </div>
        </div>
      );
      break;
    case "main-queen":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type type="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="/media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type type="base">1 queen sized bed</Type>
              </div>
            </section>
            <section>
              {/* <div className={styles.item_wrap}>
              <Type type="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
            </div> */}
            </section>
          </div>
        </div>
      );
      break;
    case "main-full":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="/media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">This room has one full sized bed.</Type>
              </div>
            </section>
            <section>
              {/* <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div> */}
            </section>
          </div>
        </div>
      );
      break;
    case "space-king":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">1 king sized bed.</Type>
              </div>
            </section>
            {/* <section>
              <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div>
            </section> */}
          </div>
        </div>
      );
      break;
    case "space-queen":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="/media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">1 queen sized bed.</Type>
              </div>
            </section>
            {/* <section>
              <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div>
            </section> */}
          </div>
        </div>
      );
      break;
    case "space-full":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">1 full sized bed.</Type>
              </div>
            </section>
            {/* <section>
              <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div>
            </section> */}
          </div>
        </div>
      );
      break;
    case "space-twin":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">Label</Type>
              </div>
            </section>
            {/* <section>
              <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div>
            </section> */}
          </div>
        </div>
      );
      break;
    case "space-sofa":
      return (
        <div className={clsx(styles.root)}>
          <div className={clsx(styles.inner_wrap)}>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="bold">Bedroom {idx}</Type>
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <img className={styles.icon} src="/media/icons/_bed.svg" />
              </div>
            </section>
            <section>
              <div className={styles.item_wrap}>
                <Type variant="base">This room has a sofa pull out.</Type>
              </div>
            </section>
            {/* <section>
              <div className={styles.item_wrap}>
                <Type variant="note">This is a note will let the person viewing the card will see when they clidk on the object. </Type>
              </div>
            </section> */}
          </div>
        </div>
      );
      break;
    default:
      return <div></div>;
  }
};

export default InfoCard;

/**
Below will need to be reimplemeted to replace the hardcoded values above. The values will come from an api. 
return (
  <div className={clsx(styles.root)}>
    <div className={clsx(styles.inner_wrap)}>
      <section>
        <div className={styles.item_wrap}>
          <Type type="bold">{title}</Type>
        </div>
      </section>
      <section>
        <div className={styles.item_wrap}>
          <img className={styles.icon} src={icon} />
        </div>
      </section>
      <section>
        <div className={styles.item_wrap}>
          <Type type="base">{label}</Type>
        </div>
      </section>
      <section>
        <div className={styles.item_wrap}>
          <Type type="note">{note}</Type>
        </div>
      </section>
    </div>
  </div>
); 

*/
