import { EintragPolicyModel } from './eintrag-policy-model';

describe('EintragPolicyModel', () =>
{
    it('should create an instance', () =>
    {
        expect(new EintragPolicyModel()).toBeTruthy();
    });

    it('should be applied (null, null)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(obj.start).toEqual(null);
        expect(obj.end).toEqual(null);
        expect(result).toBeTruthy();
    });

    it('should be applied (older, null)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.start = new Date(2000, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(obj.end).toEqual(null);
        expect(result).toBeTruthy();
    });

    it('should not be applied (newer, null)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.start = new Date(2100, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(obj.end).toEqual(null);
        expect(result).toBeFalsy();
    });

    it('should not be applied (null, older)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.end = new Date(2000, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(obj.start).toEqual(null);
        expect(result).toBeFalsy();
    });

    it('should be applied (null, newer)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.end = new Date(2100, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(obj.start).toEqual(null);
        expect(result).toBeTruthy();
    });

    it('should be applied (older, newer)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.start = new Date(2000, 1, 1);
        obj.end = new Date(2100, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(result).toBeTruthy();
    });

    it('should not be applied (older, older)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.start = new Date(2000, 1, 1);
        obj.end = new Date(2001, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(result).toBeFalsy();
    });

    it('should not be applied (newer, newer)', () =>
    {
        // Arrange
        let obj = new EintragPolicyModel();
        obj.start = new Date(2100, 1, 1);
        obj.end = new Date(2101, 1, 1);

        // Act
        let result = obj.isToBeApplied();

        // Assert
        expect(result).toBeFalsy();
    });
});
