import { PagesEntity } from "@models/strapi-types";
import NavSlugs from "@models/nav-slugs";
import { Feedback } from "@models/enums";
import MediaContainer from "@components/LessonPageContent/MediaContainer";
import LessonPageWrapper from "@components/LessonPageWrapper";
import TextAndTranslation from '@components/LessonPageContent/TextAndTranslation';
import AudioExample from "@components/LessonPageContent/AudioExample";

import styles from "@styles/LessonPageTemplates/ShortTextWithTranslation.module.css";

interface Props {
  page: PagesEntity;
  navSlugs: NavSlugs;
}

const ShortTextWithTranslation: React.FC<Props> = ({ page, navSlugs }: Props) => {
  return (
    <LessonPageWrapper
      page={page}
      navSlugs={navSlugs}
      canContinue={true}
      feedback={Feedback.None}
      notifyCannotContinue={() => {}}
    >
      <div className={styles.mainContent}>
        <MediaContainer page={page} />
        <TextAndTranslation shortText={page.textAndTranslation!.text} translation={page.textAndTranslation!.translation}/>
        {page.audioExample !== undefined && page.audioExample !== null &&
          <AudioExample audioUrl={page.audioExample!.audio.url} shortText={page.audioExample!.text} translation={page.audioExample.translation} />
        }
      </div>
    </LessonPageWrapper>
  );
};

export default ShortTextWithTranslation;