
import Link from "next/link";
import styles from "./item.module.css";

// import "./items.scss";
// import Router from "next/router";
// import "../../../public/scss/main.scss"; 

export default function Item(props) {
  const { itemdata } = props;
  // key={itemobject.sys.id} add back to article element
  return (
    <div className="px-1">
      {" "}
      <article className="mb-4 card bg-white border-bottom shadow-sm">
        <Link href="/plan/36kbQ5IUqVq8FY8qZiT8tt">
          <a>
            <section className="">
              {/* <div className="test-media-bg" style={{ backgroundImage: `url(${itemobject.fields.media[0].fields.file.url})` }}></div> */}
              <div
                className={styles.media_bg}
                style={{
                  backgroundImage: `url(${itemdata.fields.media[0].fields.file.url})`,
                }}
              ></div>
            </section>
            <section className="text-section mt-3 px-3">
              <div className="txt-wrap">
                <div className="row">
                  <div className="col-8">
                    <strong className="mb-2">Kalorama</strong>

                    <p className="room-attributes">
                      3 Beds | 4 Baths | 10 Guests
                    </p>
                  </div>

                  <div className="col-4 align-right text-right">
                    <p>
                      <strong>
                        $495<span> /night</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="social lik | com | sha"></div>
            </section>

            <section>
              <div className="pricing mt-3">
                <div className=""></div>
              </div>
            </section>
            <section>
              <div className="ratings">
                <div className="Like Comment Share/Repost"></div>
              </div>
            </section>
            <section>
              <div className="comment box"></div>
            </section>
          </a>
        </Link>
      </article>
    </div>
  );
}
