import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import { getActionPageAndSubscriberDetailsByArtistPageRoute } from '../graphql/getSubscriberDataByActionPage';

export const useGetSubscriberData = ({ artistRoute, pageRoute, enduserId }) => {
  const [returnData, setReturnData] = useState();
  const { data, loading } = useQuery(
    gql(getActionPageAndSubscriberDetailsByArtistPageRoute),
    {
      variables: { artistRoute, pageRoute },
      skip: !artistRoute && !pageRoute,
    }
  );

  const formatTableData = tableData => {
    const artistName = tableData?.ArtistByRoute.items[0].artistName;
    const endUserData =
      tableData.ArtistByRoute.items[0].actionPages.items[0].subscribers.items.map(
        item => {
          const firstName = item?.enduser?.firstName || '';
          const lastName = item?.enduser?.lastName || '';
          const fullName =
            firstName || lastName ? `${firstName} ${lastName}` : '[no name]';
          return {
            id: item.enduserID,
            email: item?.enduser?.email,
            firstName,
            lastName,
            name: fullName,
            phone: item?.enduser?.phoneNumber || '',
            avatar: item?.profilePicture,
            points: item?.enduserPageSubscriptionCompletedActions?.items.reduce(
              (a, b) => {
                const value = b?.action?.pointValue || 0;
                return value + a;
              },
              0
            ),
          };
        }
      );
    // sort the enduser data by point values & assign rankings
    endUserData.sort((a, b) => (a.points < b.points ? 1 : -1));
    const enduserDataLength = endUserData.length;
    for (let i = 0; i < enduserDataLength; i++) {
      const percentile = (i + 1) / enduserDataLength;
      endUserData[i].rank = i + 1;
      endUserData[i].percentile = percentile;
      endUserData[i].tier =
        percentile <= 0.05
          ? 'Diamond'
          : percentile <= 0.1
          ? 'Platinum'
          : percentile <= 0.25
          ? 'Gold'
          : percentile <= 0.5
          ? 'Silver'
          : percentile <= 0.75
          ? 'Bronze'
          : 'Bronze';
    }
    const currentUserData = endUserData?.find(item => item.id === enduserId);
    const currentUserTier = currentUserData.tier;
    const topFans = endUserData.slice(0, 5);
    const topFansEnduserTier = endUserData.filter(
      item => item.tier === currentUserTier
    )?.slice(0,5);
    const pointsToTierLeader = topFansEnduserTier[0]?.points - currentUserData.points;
    currentUserData.pointsToTierLeader = pointsToTierLeader || 0;

    return {
      endUserData,
      tableData: topFansEnduserTier,
      totalSubscribers: enduserDataLength,
      topFans,
      currentUserData,
      artistName,
    };
  };

  useEffect(() => {
    if (data) {
      setReturnData(formatTableData(data));
    }
  }, [data]);

  console.log(`returning data`, returnData, loading);

  return {
    ...returnData,
    loading,
  };
};
