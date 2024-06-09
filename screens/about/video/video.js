"use client";

import React from "react";
import cn from "classnames";
import styles from "./video.module.css";
import icons from "@/constants/icons";
import Modal from "@/components/modal";

export default function Video() {
  const [visible, setVisible] = React.useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.play_button} onClick={() => setVisible(true)}>
        <div className={styles.circle}>{icons.PlayRight}</div>
      </div>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZieW_OSkuiQ?si=BtZDi5peIgbLJiBK"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  );
}
