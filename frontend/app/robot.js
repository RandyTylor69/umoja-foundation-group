
import {MetadataRoute} from "next";

export default function robot(){
    return{
        rules: {
            userAgent: '*', // all search engines
            allow: "/",
            disallow: ['/api']
        },
        sitemap: 'htts://umojafoundationgroup.org/sitemap.xml'
    }
}