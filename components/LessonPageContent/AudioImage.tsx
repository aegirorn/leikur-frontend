import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";
import styles from "@styles/LessonPageContent/AudioImage.module.css";
import { RoundedCorners } from "@models/enums";

const AudioImage = (props: { imageSrcUrl: string; audioSrcUrl: string; altText: string }) => {
  const { imageSrcUrl, audioSrcUrl, altText } = props;
  return (
    <div>
      <Image
        src={imageSrcUrl}
        layout="responsive"
        width={500}
        height={281}
        alt={altText}
        className={styles.topCornersRounded}
      />
      <AudioPlayer audioSrcUrl={audioSrcUrl} roundedCorners={RoundedCorners.Bottom} />
    </div>
  );
};

export default AudioImage;