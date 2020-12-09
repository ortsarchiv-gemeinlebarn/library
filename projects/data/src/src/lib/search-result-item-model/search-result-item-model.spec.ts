import { SearchResultItemModel } from './search-result-item-model';

describe('SearchResultItemModel', () =>
{
    it('should create an instance', () =>
    {
        expect(new SearchResultItemModel(1000, {})).toBeTruthy();
    });
});
