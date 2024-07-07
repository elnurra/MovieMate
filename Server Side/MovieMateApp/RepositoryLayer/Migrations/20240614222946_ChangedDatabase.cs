using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    public partial class ChangedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Quality",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6095),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(964));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Property",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6537),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(1602));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "PricingPlans",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5635),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(433));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Movie",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5209),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(9793));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Genre",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(4493),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(8580));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Feature",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(3975),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(7683));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Faq",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(9921),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(1148));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Contact",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(5547),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 21, DateTimeKind.Utc).AddTicks(4215));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Comment",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6918),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(2389));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Quality",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(964),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6095));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Property",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(1602),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6537));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "PricingPlans",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(433),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5635));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Movie",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(9793),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5209));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Genre",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(8580),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(4493));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Feature",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(7683),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(3975));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Faq",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 22, DateTimeKind.Utc).AddTicks(1148),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(9921));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Contact",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 21, DateTimeKind.Utc).AddTicks(4215),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(5547));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Comment",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 16, 9, 2, 24, 23, DateTimeKind.Utc).AddTicks(2389),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6918));
        }
    }
}
