"use client";

import PageHero from "../../components/common/PageHero";
import FaqSection from "../../components/home/FaqSection";
import CtaBand from "../../components/common/CtaBand";
import { faqs } from "../../data/faqs";

export default function FaqContent() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        intro="Answers about commercial transport services, vehicle selection, service areas in Delhi NCR & Haryana, rates, and booking processes."
        image="/assets/services/open-body.jpg"
        crumbs={[{ label: "FAQ" }]}
      />
      <FaqSection items={faqs} showAllLink={false} />
      <CtaBand />
    </>
  );
}
