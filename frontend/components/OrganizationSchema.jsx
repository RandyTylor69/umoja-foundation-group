

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Umoja Foundation Group",
  url: "https://umojafoundationgroup.org", // <-- Use your actual domain
  logo: "https://umojafoundationgroup.org/images/logo.png", // <-- Use your actual logo path
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
