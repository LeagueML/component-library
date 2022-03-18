import React, { Suspense } from "react";
import Card from "../Card";
import { CardProps } from "../Card/Card.types";
import ErrorBoundaryCard, { ErrorBoundaryCardProps } from "../ErrorBoundaryCard/ErrorBoundaryCard";
import LoadingCard from "../LoadingCard";
import './RootLayoutCard.css'

export interface RootLayoutCardProps extends ErrorBoundaryCardProps, CardProps {}


function RootLayoutCard(props : RootLayoutCardProps) {
    return (
        <>
            <Suspense fallback={<LoadingCard />}>
                <ErrorBoundaryCard>
                    <div className="rootLayout">
                        <Card {...props} />
                    </div>
                </ErrorBoundaryCard>
            </Suspense>
        </>
    )
}

export default RootLayoutCard;
