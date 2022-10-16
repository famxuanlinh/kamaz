import { IMG_URL } from '~/constants/env';
import styled from 'styled-components';

const Wrapper = styled.div`
    img {
        max-width: 100%;
        margin-top: 16px;
        margin-bottom: 24px;
    }
`;

const HTMLParser = ({ content, htmlParserClass }) => {
    if (!content) return <div />;
    const regex = /<img(\s.*?)src=(?:'|")([^'">]+)(?:'|")/g;
    const regexSet = /<img(\s.*?) srcset=(?:'|")([^'">]+)(?:'|")/g;
    let html = content;
    let result;

    while ((result = regex.exec(html)) !== null) {
        if (Array.isArray(result) && result.length > 2 && !result[2].includes('http')) {
            html = html.replace(result[2], `${IMG_URL}${result[2]}`);
        }
    }

    while ((result = regexSet.exec(html)) !== null) {
        if (Array.isArray(result) && result.length > 2 && !result[2].includes('http')) {
            html = html.replace(
                result[2],
                `${IMG_URL}${result[2]
                    ?.split(',')
                    ?.map((item) => (item ? `${IMG_URL}${item}` : ''))
                    ?.join(' ')}`,
            );
            // /uploads/thumbnail_IMG_0248_b1e81334a6.JPG 234w,/uploads/small_IMG_0248_b1e81334a6.JPG 500w,/uploads/medium_IMG_0248_b1e81334a6.JPG 750w,/uploads/large_IMG_0248_b1e81334a6.JPG 1000w,
            //Nó có 5 phần tử để réponsive. lúc đầu phải split nó ra để thêm url vào xong rồi join nó lại.
        }
    }

    return <Wrapper className={htmlParserClass || ''} dangerouslySetInnerHTML={{ __html: html || '' }} />;
};
export default HTMLParser;
// /uploads/thumbnail_IMG_0248_b1e81334a6.JPG 234w,/uploads/small_IMG_0248_b1e81334a6.JPG 500w,/uploads/medium_IMG_0248_b1e81334a6.JPG 750w,/uploads/large_IMG_0248_b1e81334a6.JPG 1000w,
