import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.Experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>

          {/* Render work summary properly */}
          <div
             className="prose prose-sm text-black"
            dangerouslySetInnerHTML={{
              __html: experience?.workSummery?.replace(/\n/g, "<br/>") || "",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
