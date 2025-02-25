import React from "react";
import Container from "@/components/ui-components/container";
import { Membership, Philosophy } from "@/utils/types";
import Text from "@/components/ui-components/text";
import Image from "next/image";

type Props = {
    philosophy?: Philosophy;
    membership?: Membership;
    imageFirst?: boolean;
};

const CompanyPhilosophy = ({ philosophy, membership, imageFirst = true }: Props) => {
    const data = philosophy || membership;
    return (
        <Container
            className={`flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-12 mt-12 ${imageFirst ? "" : "lg:flex-row-reverse"
                }`}
        >
            {/* Image Section */}
            {data?.image?.url && (
                <div className="w-full lg:w-1/2">
                    <Image
                        src={data.image.url}
                        alt=""
                        width={100}
                        height={100}
                        className="w-auto h-[540px] object-cover"
                    />
                </div>
            )}

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <Text variant="title4" color="black">
                    {data?.title}
                </Text>

                {data?.subtitle && (
                    <Text variant="title5" color="brown" additional="w-full max-w-[600px] mt-4 !text-khakhi">
                        {data.subtitle}
                    </Text>
                )}

                {philosophy?.points && (
                    <div className="mt-4">
                        {philosophy.points.map((point, index) => (
                            <Text key={index} additional="mb-2" variant="body2">
                                {`•  ${point}`}
                            </Text>
                        ))}
                    </div>
                )}
                {membership?.memberships && (
                    <div className="mt-4">
                        {membership.memberships.map((point, index) => (
                            <Text key={index} additional="mb-2" variant="body2">
                                {`•  ${point}`}
                            </Text>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default CompanyPhilosophy;