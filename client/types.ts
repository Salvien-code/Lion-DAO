export enum Vote {
  YAY,
  NAY,
}

export type Voters = {
  [key: number]: boolean;
};

export type Proposal = {
  nftTokenId: number;
  proposalId: number;
  deadline: Date;
  yayVotes: number;
  nayVotes: number;
  executed: boolean;
};
