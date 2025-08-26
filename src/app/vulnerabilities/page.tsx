import HeroChart from "@/components/vulnerabilities/HeroChart";
import FiltersBar from "@/components/vulnerabilities/FiltersBar";
import VulnTable from "@/components/vulnerabilities/table/VulnTable";
import TrendsSection, { TrendItem } from "@/components/vulnerabilities/trends/TrendsSection";
import PageChrome from "@/components/chrome/PageChrome";

export default function VulnerabilitiesPage() {
  return (
    <main className="relative px-6 md:px-10 lg:px-16 xl:px-24 py-10">
      <PageChrome /> 
    <section className="py-10">
      <br/><br/><br/><br/>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <HeroChart />

        {/* Açıklama */}
        <div className="mt-8 flex justify-center">
          <p
            className="text-center font-museo"
            style={{
              width: "min(1007px, 100%)",
              color: "var(--Text-400, #FEF7CC)",
              fontSize: "23.04px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Browse detailed CVE data and filter vulnerabilities by category, date, or affected
            system. Stay informed with our continuously updated list.
          </p>
        </div>

        <br /><br /><br /><br />
        <FiltersBar />

      </div>
      <div className="mt-8">
        <VulnTable />
      </div>
      <br /><br /><br /><br />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-center">
          <h2
            className="text-center"
            style={{
              width: "min(947px, 100%)",
              color: "var(--Main-default, #D4EA33)",
              fontFamily: '"Josefin Sans"',
              fontSize: "39.81px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            The 2025 Threat Trends Report
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mt-4 flex justify-center">
          <p
            className="text-center"
            style={{
              width: "min(1077px, 100%)",
              color: "var(--Text-400, #FEF7CC)",
              fontFamily: "MuseoModerno",
              fontSize: "23.04px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            A forward-looking analysis of evolving vulnerabilities, exploit patterns, and cybersecurity
            trends shaping 2025.
          </p>
        </div>
      </div>

      <div className="mt-10">

        {/* DB örneği:
// const items: TrendItem[] = await db.cve.findMany({ orderBy: { publishedAt: "desc" } });}*/}

        <TrendsSection /* items={items} */ />
      </div>
      <br /><br /><br /><br /><br /><br />
    </section>
    </main>

  );
}
