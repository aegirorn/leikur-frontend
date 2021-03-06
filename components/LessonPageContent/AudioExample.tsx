import React from "react";
import TextAndTranslation from "@components/LessonPageContent/TextAndTranslation";
import AudioExampleButton from "@components/LessonPageContent/AudioExampleButton";

import styles from "@styles/LessonPageContent/AudioExample.module.css";

interface Props {
  audioUrl: string;
  shortText: string;
  translation: string;
}

const AudioExample = ({ audioUrl, shortText, translation }: Props) => {
  return (
    <div className={styles.container}>
      <hr />
      <AudioExampleButton audioSrcUrl={audioUrl} />
      <TextAndTranslation shortText={shortText} translation={translation} />
    </div>
  );
};

export default AudioExample;
