import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import FaqSection from "../components/home/FaqSection";
import CtaBand from "../components/common/CtaBand";
import { faqs } from "../data/faqs";

export default function FAQ() {
  return (
    <>
      <Seo title="Frequently Asked Questions" description="Answers about transport categories, vehicle requirements, pickup and delivery locations, quotes and cargo information." />
      <PageHero title="Frequently Asked Questions" intro="What businesses ask before arranging transport with us." image="/assets/services/open-body.jpg" crumbs={[{ label: "FAQ" }]} />
      <FaqSection items={faqs} showAllLink={false} />
      <CtaBand />
    </>
  );
}
