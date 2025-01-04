import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

const HeadMetadata: React.FC<Props> = (props) => {
  /*** HOOKS ***/

  const { title, titleKey, description, descriptionKey } = props;
  const intl = useIntl();

  /*** METHODS ***/

  const getTitle = (): string | undefined => {
    let formattedTitle: string | undefined;
    if (title) {
      formattedTitle = `${title}`;
    } else if (titleKey) {
      formattedTitle = `${intl.formatMessage({ id: titleKey })}`;
    } else {
      formattedTitle = intl.formatMessage({ id: "head.metadata.title" });
    }

    return formattedTitle;
  };

  const getDescription = (): string => {
    let formattedDescription: string;
    if (description) {
      formattedDescription = description;
    } else if (descriptionKey) {
      formattedDescription = intl.formatMessage({ id: descriptionKey });
    } else {
      formattedDescription = intl.formatMessage({
        id: "head.metadata.description",
      });
    }

    return truncate(formattedDescription, 145);
  };

  const truncate = (text: string, length: number): string => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  /*** VISUAL ***/

  return (
    <Helmet>
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
    </Helmet>
  );
};
export default HeadMetadata;

interface Props {
  title?: string;
  titleKey?: string;
  description?: string;
  descriptionKey?: string;
}
