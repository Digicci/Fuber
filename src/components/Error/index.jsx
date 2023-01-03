import { useTranslation } from 'react-i18next';
import React from "react";

function Error() {

	const {t, i18n} = useTranslation('translation', {keyPrefix: 'error'});

	return(
			<>
					<div>
							<h1>{t('error')}</h1>
					</div>
			</>
	)
}

export default Error