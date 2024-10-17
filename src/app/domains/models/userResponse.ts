export interface UserResponse {
    results: {
      name: {
        title: string;
        first: string;
        last: string;
      };
      email: string;
      phone: string;
      location: {
        city: string;
        state: string;
      };
    }[];
  }