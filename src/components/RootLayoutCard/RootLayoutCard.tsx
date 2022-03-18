import React, { Suspense } from "react";
import Card from "../Card";
import { CardProps } from "../Card/Card.types";
import ErrorBoundaryCard, { ErrorBoundaryCardProps } from "../ErrorBoundaryCard/ErrorBoundaryCard";
import LoadingCard from "../LoadingCard";

export interface RootLayoutCardProps extends ErrorBoundaryCardProps, CardProps {}


function RootLayoutCard(props : RootLayoutCardProps) {
    return (
        <>
            <Suspense fallback={<LoadingCard />}>
                <ErrorBoundaryCard>
                    <Card {...props} />
                </ErrorBoundaryCard>
            </Suspense>
        </>
    )
}

export default RootLayoutCard;
