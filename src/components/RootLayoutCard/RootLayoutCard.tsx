import React, { Suspense } from 'react';
import Card from '../Card';
import { CardProps } from '../Card/Card.types';
import ErrorBoundaryCard from '../ErrorBoundaryCard';
import { ErrorBoundaryCardProps } from '../ErrorBoundaryCard/ErrorBoundaryCard.types';
import LoadingCard from '../LoadingCard';
import './RootLayoutCard.css';

export interface RootLayoutCardProps
  extends ErrorBoundaryCardProps,
    CardProps {}

function RootLayoutCard(props: RootLayoutCardProps) {
  return (
    <>
      <div className='rootLayout'>
        <Suspense fallback={<LoadingCard />}>
          <ErrorBoundaryCard>
            <Card {...props} />
          </ErrorBoundaryCard>
        </Suspense>
      </div>
    </>
  );
}

export default RootLayoutCard;
